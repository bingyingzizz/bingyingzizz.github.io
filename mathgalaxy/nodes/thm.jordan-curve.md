# Jordan 曲线定理　`thm.jordan-curve`
定理（Jordan）：简单闭曲线把平面分成内外两块
layer 14 · 定理 · 拓扑空间的基本语汇 · 拓扑学
[在星图里打开](../#n=thm.jordan-curve)　·　[节点索引](../index.md)

设 $C \subseteq \mathbb{R}^{2}$ 是一条 Jordan 曲线（见 `def.jordan-curve`）。则补集 $\mathbb{R}^{2} \setminus C$ 恰有两个连通分量：一个有界（**内部**），一个无界（**外部**）；两者都以 $C$ 为边界。

等价地，$C$ **分离**平面：$\mathbb{R}^{2} \setminus C$ 不连通，且连通分量恰好两个。

## 为什么成立（入边，证明在 proofs/）
- [`def.jordan-curve`](../nodes/def.jordan-curve.md) Jordan 曲线：用到了定义 Jordan 曲线　[proofs/dep.jordantheorem-curve.md](../proofs/dep.jordantheorem-curve.md)

refs: Hatcher, Algebraic Topology, §2.B

> 说明见 `notes/thm.jordan-curve.md`

引用：`thm.jordan-curve`（内容 v0.9.3）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)
