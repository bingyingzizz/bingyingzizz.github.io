# B(E,F) 完备　`thm.bounded-operators-banach`
$F$ 完备 $\implies$ $B(E,F)$ 是 Banach 空间
layer 18 · 定理 · 赋范空间与有界算子 · 泛函分析
[在星图里打开](../#n=thm.bounded-operators-banach)　·　[节点索引](../index.md)

设 $E$ 赋范、$F$ Banach。则 $(B(E, F), \|\cdot\|)$ 是 Banach 空间。特别地，对偶空间 $E^* = B(E, \mathbb{K})$ **总是** Banach（不论 $E$ 是否完备）。

## 为什么成立（入边，证明在 proofs/）
- …另有入边，续页见 [nodes/thm.bounded-operators-banach.2.md](./thm.bounded-operators-banach.2.md)

## 它能推出什么 / 谁在用它
- …另有出边，续页见 [nodes/thm.bounded-operators-banach.3.md](./thm.bounded-operators-banach.3.md)

refs: Rudin, Functional Analysis · 有界线性算子、对偶与 Neumann 级数

## 说明
**证明思路**：逐点取极限定义 $u$，再用一致有界控制 $\lVert u_k-u\rVert$。完整证明见边 `imp.bounded-operators-banach-proof`。特别地 $E^*=B(E,\mathbb K)$ 总是 Banach。

引用：`thm.bounded-operators-banach`（内容 v0.9.3）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)
