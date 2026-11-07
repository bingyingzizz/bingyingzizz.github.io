# Radó 定理　`thm.rado`　·　说明
根 `../`

**路线 A（复分析）**：先造复结构（成为 Riemann 面），再取非常值亚纯函数 $f$，把 $S^{2}$ 的三角剖分沿 $f$ 拉回。**可定向**时直接在 $S$ 上造复结构；**不可定向**时先取**可定向双覆盖** $\widetilde S\to S$（它可定向），在 $\widetilde S$ 上造复结构并拉回剖分，再对 $S=\widetilde S/\mathbb Z_{2}$ 取商剖分（分支点处用局部模型 $z\mapsto z^{2}$）。需要的输入：Riemann 面上亚纯函数存在性（Riemann–Roch）与分支覆盖的局部模型 $z\mapsto z^{m}$。⚠ 本图内部不能拿 `thm.riemann-hurwitz` 来补这一步 —— 那条定理的证明已经假设了 $X$ 有三角剖分，用它证 Radó 是循环论证。

**路线 B（微分拓扑）**：先证紧曲面有（本质唯一的）光滑结构（Radó 本人、Munkres、Whitehead），再用 Morse 理论或管状邻域把曲面拆成柄，柄的粘接给出有限多边形剖分。需要的输入：光滑结构存在性、Morse 函数存在性、柄分解。本图都没有节点。

> 续见 notes/thm.rado.3.md
