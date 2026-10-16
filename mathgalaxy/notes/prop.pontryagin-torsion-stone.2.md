# 挠 与 Stonean，无挠 与 连通　`prop.pontryagin-torsion-stone`　·　说明
根 `../`

**证明。**
- **挠 $\iff$ Stonean**：$M$ 挠 $\iff$ $M = \varinjlim_{i} M_{i}$（$M_{i}$ **有限**）$\iff$ $\widehat M = \varprojlim_{i} \widehat{M_{i}}$（每个 $\widehat{M_{i}}$ 仍有限，对偶把余极限翻成逆极限）$\iff$ $\widehat M$ 是**投射有限**空间，即 Stone 空间（紧、Hausdorff、全不连通）；对一般（非挠）离散群，极不连通性对应同样的「有限块的逆极限」结构 ✓。
- **无挠 $\iff$ 连通**：等价链逐条走 ——
$M$ 不是无挠 $\iff$ 存在非平凡的**有限**子群单射 $M' \hookrightarrow M$ $\iff$ 存在非平凡有限商 $\widehat M \twoheadrightarrow \widehat{M'}$（对偶把单射翻成满射）$\iff$ $\widehat M$ **不连通** ✓。
（最后一步：紧 Hausdorff 空间不连通 $\iff$ 有开闭真子集 $\iff$ 有到非平凡有限离散空间的满连续映射。）∎
⭐ 「挠子群 $\leftrightarrow$ 连通分支」「无挠商 $\leftrightarrow$ Stonean 部分」两个字典都可以从这两条链逐字读出。
