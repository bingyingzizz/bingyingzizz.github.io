# 完全不连通与极不连通　`def.totally-disconnected`　·　说明
根 `../`

⚠️ **两个名字只差一个字，强弱正好相反**：



- **完全不连通**说「碎到每个分量只剩一个点」；
- **极不连通**说「开集的闭包不再长大」—— 后者更强。

**极不连通的需求方是 Haskell / 集合论 / 凝聚态**：它是「投影对象」的几何形态（Gleason 定理：$\mathbf{CHaus}$ 的投射对象恰好是 Stonean 空间）。

⭐ **在紧 Hausdorff 的世界里三者串成一条链**：极不连通 $\implies$ 完全不连通（**Lemma 2.2.10**）；完全不连通 + 紧 Hausdorff $\iff$ **profinite**（**Prop 2.2.9**）；极不连通 + 紧 Hausdorff $\implies$ **Stonean**。

**例子**：Cantor 集 $2^{\mathbb{N}}$ 完全不连通但不极不连通；$\beta\mathbb{N}$（$\mathbb{N}$ 的 Stone–Čech 紧化）极不连通；$\beta\mathbb{N} \setminus \mathbb{N}$ 是它的一个极端例子。
