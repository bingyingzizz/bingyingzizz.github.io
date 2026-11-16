# 最大公因数　`def.gcd`
最大公因数与它的两个刻画
layer 10 · 定义 · 整除与同余 · 数论
[在星图里打开](../#n=def.gcd)　·　[节点索引](../index.md)

设 $a, b \in \mathbb{Z}$ 不全为零。**最大公因数** $\gcd(a, b)$ 是同时整除 $a$ 与 $b$ 的正整数中最大的那个。

等价刻画（不预设存在性）：$\gcd(a, b)$ 是集合 $\{\, ua + vb : u, v \in \mathbb{Z} \,\}$ 中最小的正整数。

## 为什么成立（入边，证明在 proofs/）
- [`def.divides`](../nodes/def.divides.md) 整除：用到了定义 整除　[proofs/e116.definition.md](../proofs/e116.definition.md)

## 它能推出什么 / 谁在用它
- 被 [`def.euler-phi`](../nodes/def.euler-phi.md) Euler 函数 用
- 被 [`thm.euclid-algorithm`](../nodes/thm.euclid-algorithm.md) 辗转相除法 用
- 被 [`thm.bezout`](../nodes/thm.bezout.md) Bézout 恒等式 用

- …另有出边，续页见 [nodes/def.gcd.2.md](./def.gcd.2.md)

refs: 华罗庚《数论导引》§1

> 说明见 `notes/def.gcd.md`

引用：`def.gcd`（内容 v0.9.3）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)
