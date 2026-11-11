# Čech 消解 + 软层无环 $\implies$ 仿紧上 Čech 等于层上同调（路线，含缺口）
`imp.paracompact-cech` · 推出 · strong 边 · 根 `../`

`def.cech-cohomology` Čech 上同调 + `prop.paracompact-partition-unity` 仿紧性与单位分解 + `thm.cartan-leray` Cartan–Leray 谱序列 + `cor.cech-cohomology-spectral` Čech 到上同调的谱序列 + `def.right-derived-functor` 右导出函子 + `thm.derived-long-exact` 导出函子的长正合列 → `thm.paracompact-cech-equals-sheaf` 仿紧空间上的 Čech 就是上同调

**第二步：$\check{\mathcal{C}}^{p}$ 一般不是软层（修正一个常见误判）。** $\check{\mathcal{C}}^{p}$ 是开包含 $j_{*}$ 的直积，而 $j_{*}$ 一般只左正合；单位分解作用在**函数**上，不能把 $\mathcal{M}$ 的整体截面「拆成」局部截面再拼回。因此不能由「Čech 复形每一项软」

> 续见 proofs/imp.paracompact-cech.5.md
