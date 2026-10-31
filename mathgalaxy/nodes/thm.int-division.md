# 整数的带余除法　`thm.int-division`
带余除法：$a = qb + r$，$0 \le r < |b|$
layer 11 · 定理 · 整除与同余 · 数论
[在星图里打开](../#n=thm.int-division)　·　[节点索引](../index.md)

设 $a, b \in \mathbb{Z}$ 且 $b \ne 0$。则存在**唯一**的 $q, r \in \mathbb{Z}$ 使

$$a = qb + r, \qquad 0 \le r < |b| .$$

$q$ 叫**商**，$r$ 叫**余数**。

## 为什么成立（入边，证明在 proofs/）
- [`def.divides`](../nodes/def.divides.md) 整除：用到了定义 整除　[proofs/e109:definition.md](../proofs/e109:definition.md)
- [`thm.division-algorithm`](../nodes/thm.division-algorithm.md) 带余除法：整数与多项式：同一个带余除法　[proofs/e120:analogy.md](../proofs/e120:analogy.md)

## 它能推出什么 / 谁在用它
- …另有出边，续页见 [nodes/thm.int-division.2.md](./thm.int-division.2.md)

refs: 华罗庚《数论导引》§1；Borevich–Shafarevich, Number Theory, Ch. 1

> 说明见 `notes/thm.int-division.md`

引用：`thm.int-division`（内容 v0.9.1）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)
