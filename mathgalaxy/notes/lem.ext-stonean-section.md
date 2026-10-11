# Stonean 上 Ext 的截面公式　`lem.ext-stonean-section`　·　说明
根 `../`

**在做什么。** 左边是「Ext 层在 $S$ 上的截面」，右边是「把一个普通 Ext 算出来」。这条把**层的** Ext 换成了**单次**的 Ext —— 于是「算 Ext 层」这件事变成「算一个具体的导出 Hom」。

**为什么 Stonean 可以。** Stonean 空间 $S$ 上，$\mathbb{Z}[S]$ 是**投射**的，于是 $\operatorname{Hom}_{\mathbb{Z}}(\mathbb{Z}[S], -)$ 正合。把这个正合函子搬到自然同构



$$\operatorname{Hom}_{\mathbb{Z}}(M \cdot S,\ N) \cong \operatorname{Hom}_{\mathbb{Z}}\bigl(\mathbb{Z}[S],\ \operatorname{Hom}_{\mathbb{Z}}(M, N)\bigr)$$



两边，就得到了结论：右边是「内 Hom 的截面」，左边是「先张量再 Hom」。

⚠️ 关键前提是 **Stonean**（极不连通），不是一般的紧 Hausdorff —— 极不连通性正是 $\mathbb{Z}[S]$ 投射的来源。

⭐ 这条是下面谱序列的**接线口**：Breen–Deligne 分解把 Ext 展开成若干「自由对象」，而每一项的 Ext 恰好可以用这条把层的计算搬回普通计算。
