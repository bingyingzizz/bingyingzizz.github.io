# 辗转相除法　`thm.euclid-algorithm`
Euclid 算法：余数严格下降，必停
layer 12 · 定理 · 整除与同余 · 数论
[在星图里打开](../#n=thm.euclid-algorithm)　·　[节点索引](../index.md)

设 $a, b \in \mathbb{Z}$ 不全为零。置 $r_{-1} = a$、$r_{0} = b$，反复做带余除法

$$r_{i-1} = q_{i}\, r_{i} + r_{i+1}, \qquad 0 \le r_{i+1} < r_{i} .$$

余数严格下降，故存在 $n$ 使 $r_{n+1} = 0$；此时 $r_{n} = \gcd(a, b)$，且 $r_{n}$ 可写成 $u a + v b$（$u, v \in \mathbb{Z}$）：把每步的余数逐次回代即得。

## 它能推出什么 / 谁在用它
- ⇒ [`thm.bezout`](../nodes/thm.bezout.md) Bézout 恒等式

## 为什么成立（入边，证明在 proofs/）
- …另有入边，续页见 [nodes/thm.euclid-algorithm.2.md](./thm.euclid-algorithm.2.md)

refs: 华罗庚《数论导引》§1

> 说明见 `notes/thm.euclid-algorithm.md`

引用：`thm.euclid-algorithm`（内容 v0.9.1）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)
