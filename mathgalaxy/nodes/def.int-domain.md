# 整环　`def.int-domain`
整环：没有零因子的交换幺环
layer 8 · 定义 · 整环与分解 · 抽象代数
[在星图里打开](../#n=def.int-domain)　·　[节点索引](../index.md)

设 $A$ 是交换、含幺、且 $A \ne \{0\}$ 的环。若 $ab = 0$ 只可能 $a = 0$ 或 $b = 0$，就称 $A$ 是**整环**（$A$ 没有零因子）。

等价说法（消去律）：对 $a \ne 0$，$ab = ac$ $\implies$ $b = c$。

## 为什么成立（入边，证明在 proofs/）
- [`def.ring`](../nodes/def.ring.md) 环：用到了定义 环　[proofs/e122:definition.md](../proofs/e122:definition.md)

## 它能推出什么 / 谁在用它
- 被 [`def.ufd`](../nodes/def.ufd.md) 唯一分解整环 用
- 被 [`def.gcd-domain`](../nodes/def.gcd-domain.md) gcd 整环 用

- …另有出边，续页见 [nodes/def.int-domain.2.md](./def.int-domain.2.md)

refs: Atiyah–Macdonald, Introduction to Commutative Algebra, Ch. 1；Borevich–Shafarevich, Number Theory, Ch. 1

> 说明见 `notes/def.int-domain.md`

引用：`def.int-domain`（内容 v0.9.1）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)
