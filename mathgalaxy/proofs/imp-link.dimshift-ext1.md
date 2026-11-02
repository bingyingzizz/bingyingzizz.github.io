# 维数转移的显式形式 $\implies$ 一阶扩展与扩张的等价类一一对应
`imp-link.dimshift-ext1` · 推出 · strong 边 · 根 `../`

`prop.dimension-shift` 维数转移 → `thm.ext1-extensions` 一阶扩展的分类

取投射预覆盖 $0 \to K \to P \xrightarrow{p} M \to 0$。由维数转移（$n = 0$ 的那一档展开成余核）
$$\operatorname{Ext}^{1}_{R}(M, N) \cong \operatorname{coker}\bigl(\operatorname{Hom}(P, N) \xrightarrow{\ \circ d\ } \operatorname{Hom}(K, N)\bigr).$$
**扩张 $\to$ 类**：沿 $p$ 拉回得 $0 \to N \to E_{0} \to P \to 0$，$P$ 投射使这条列分裂，取截面 $\sigma$ 后复合出 $K \to N$；换一个截面差一个 $\operatorname{Hom}(P, N)$ 的元素，故在**余核**里良定义 ✓。
**类 $\to$ 扩张**：给定 $\theta : K \to N$，作推出 $E := (P\oplus N)/\{(k, -\theta k)\}$，得 $0 \to N \to E \to M \to 0$ ✓。
两个方向逐条对消（拉回再推出同构于原扩张；推出再拉回还原 $\theta$ 的类）$\implies$ 一一对应 ✓。
**群结构**：Baer 和（纤维积后商掉反对角线）逐条满

> 续见 proofs/imp-link.dimshift-ext1.2.md
