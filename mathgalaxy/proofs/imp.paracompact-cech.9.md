# Čech 消解 + 软层无环 $\implies$ 仿紧上 Čech 等于层上同调（路线，含缺口）
`imp.paracompact-cech` · 推出 · strong 边 · 根 `../`

`def.cech-cohomology` Čech 上同调 + `prop.paracompact-partition-unity` 仿紧性与单位分解 + `thm.cartan-leray` Cartan–Leray 谱序列 + `cor.cech-cohomology-spectral` Čech 到上同调的谱序列 + `def.right-derived-functor` 右导出函子 + `thm.derived-long-exact` 导出函子的长正合列 → `thm.paracompact-cech-equals-sheaf` 仿紧空间上的 Čech 就是上同调

**第四步：缺口 ①——软层无环。** 需要：仿紧 Hausdorff 上软层 $\mathcal{S}$ 满足 $H^{n}(X,\mathcal{S})=0$（$n\ge1$）。$n=1$ 由「软层让 $0\to\mathcal{S}\to\mathcal{A}\to\mathcal{B}\to0$ 的整体截面正合」给出（对局部有限闭加细作 Zorn 归纳），$n\ge2$ 改用 **Godement 消解**（每项松弛

> 续见 proofs/imp.paracompact-cech.10.md
