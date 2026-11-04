# Stone 上常系数无高次 $\implies$ 局部紧上凝聚态 $=$ 层上同调
`imp.stone-constant-dyckhoff` · 推出 · strong 边 · 根 `../`

`lem.stone-constant-acyclic` Stone 上常系数零调 → `thm.dyckhoff` 局部紧上凝聚态＝层上同调

两边都是「层」的上同调，差别只在算它的范畴：右边是 $X$ 上开集景里的层上同调，左边是凝聚态（紧 Hausdorff 测试空间上的层）的上同调。

比较的办法：先在 **Stone 空间**上比 —— 常系数在 Stone 上没有高次（本包引用的引理），两边的谱序列在 $E_{2}$ 处就对齐了；再把一般局部紧 Hausdorff 的 $X$ 写成紧块／紧子集的滤过余极限，用「上同调与滤过余极限交换」（紧块都是 Stone 的商/子空间）搬过去。

⚠ **骨架说明**：本图没有把「上同调沿滤过余极限的行为」单独立节点，这一步只记机制；完整的比较需要 Clausen–Scholze 里那一套解析环上同调的估计。
