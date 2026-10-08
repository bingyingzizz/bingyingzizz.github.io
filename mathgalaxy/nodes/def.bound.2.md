# 界与确界　`def.bound`　·　续页（第 2 页）
根 `../`　·　第 1 页 `nodes/def.bound.md`

## 陈述（续）
- **$u$ 是 $S$ 的上界**：$\forall s \in S, s \preceq u$。
- **$l$ 是 $S$ 的下界**：$\forall s \in S, l \preceq s$。
- **$u$ 是 $S$ 的上确界**（记 $\sup S$）：$u$ 是上界，且 $u \preceq$ 每一个上界 —— 即**最小**的上界。
- **$l$ 是 $S$ 的下确界**（记 $\inf 
S$）：$l$ 是下界，且每一个下界 $\preceq l$ —— 即**最大**的下界。
- **$m$ 是 $P$ 的极大元**：$\forall x \in P ( m \preceq x \to x = m )$，即没有比 $m$ 更大的元素。
- **$m$ 是 $P$ 的最大元**：$\forall x \in P, x \preceq m$，即 $m$ 比所有元素都大。
把 $\preceq$ 换成 $\succeq$，前四条里的「上 / 大 / 极大」就变成「下 / 小 / 极小」。

⚠ **极大元 $\ne$ 最大元**；**$\sup S$ 不必属于 $S$**（$\sup (0, 1) = 1$）—— 这是两组容易混的东西。
偏序集里一般不保证 $\sup$ 存在；$\mathbb{R}$ 的特别之处正是**保证它存在**，那就是**确界原理**（见「$\mathbb{R}$ 是完备有序域」）。
