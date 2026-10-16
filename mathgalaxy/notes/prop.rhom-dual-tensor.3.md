# 离散对偶的 RHom 与导出张量　`prop.rhom-dual-tensor`　·　说明
根 `../`

 = N\cdot E$；问题化归为证 $\operatorname{RHom}_{\mathbb{Z}}(T^{E}, N) \cong N\cdot E[-1]$。
- $E$ **有限**时：由三角 $\operatorname{RHom}(\mathbb{Z},N)\to\operatorname{RHom}(\mathbb{R},N)\to\operatorname{RHom}(T,N)\to$ 与 $\operatorname{RHom}(\mathbb{R},N)=0$ 得 $\operatorname{RHom}(T,N)\cong N[-1]$，取 $E$ 次幂即可。
- $E$ **一般**时：写成有限子集的滤过余极限 $E = \varinjlim E'$，用 Breen–Deligne 谱序列 + 滤过余极限正合把结论传上去，而这一步只需 $H^{q}\bigl((T^{s})^{E}\times S, N\bigr) = \varinjlim_{E'} H^{q}\bigl((T^{s})^{E'}\times S, N\bigr)$ —— 由 Dyckhoff 与「紧 Hausdorff 的滤过极限上常系数上同调是余极限」给出。∎
