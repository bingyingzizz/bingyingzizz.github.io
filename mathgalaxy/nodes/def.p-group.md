# p-群　`def.p-group`
p-群与 p-子群
layer 8 · 定义 · 代数结构 · 抽象代数
[在星图里打开](../#n=def.p-group)　·　[节点索引](../index.md)

设 $p$ 是素数，$G$ 是有限群。若 $|G| = p^{n}$（$n \ge 0$），称 $G$ 是 **$p$-群**。
等价地，$G$ 的每个元素的阶都是 $p$ 的幂：元素的阶整除 $|G|$，故只能是 $p$ 的幂；反之若每个元素的阶都是 $p$ 的幂，由 Cauchy 定理 $|G|$ 没有其他素因子，故 $|G|$ 是 $p$ 的幂。

子群 $H \le G$ 若本身是 $p$-群，称 **$p$-子群**；$G$ 的极大 $p$-子群（按包含关系）叫 **Sylow $p$-子群**，见 `def.sylow-subgroup`。

## 为什么成立（入边，证明在 proofs/）
- [`def.group`](../nodes/def.group.md) 群：用到了定义 群　[proofs/dep.pgroup-group.md](../proofs/dep.pgroup-group.md)

## 它能推出什么 / 谁在用它
- …另有出边，续页见 [nodes/def.p-group.2.md](./def.p-group.2.md)

refs: Lang, Algebra, Ch. I §6；Dummit–Foote, Abstract Algebra, §4.3

> 说明见 `notes/def.p-group.md`

引用：`def.p-group`（内容 v0.9.3）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)
