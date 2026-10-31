# Bézout 恒等式　`thm.bezout`
Bézout：最大公因数是整系数组合
layer 13 · 定理 · 整除与同余 · 数论
[在星图里打开](../#n=thm.bezout)　·　[节点索引](../index.md)

设 $a, b \in \mathbb{Z}$ 不全为零，$d = \gcd(a, b)$。则存在 $u, v \in \mathbb{Z}$ 使

$$u a + v b = d .$$

更一般地，$\{\, ua + vb : u, v \in \mathbb{Z} \,\} = d\,\mathbb{Z}$。

## 为什么成立（入边，证明在 proofs/）
- [`thm.euclid-algorithm`](../nodes/thm.euclid-algorithm.md) 辗转相除法：Bézout 系数：把余数逐次回代　[proofs/imp.nt-euclid-bezout.md](../proofs/imp.nt-euclid-bezout.md)

## 它能推出什么 / 谁在用它
- ⇒ [`thm.crt`](../nodes/thm.crt.md) 中国剩余定理

refs: 华罗庚《数论导引》§1

> 说明见 `notes/thm.bezout.md`

引用：`thm.bezout`（内容 v0.9.1）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)
