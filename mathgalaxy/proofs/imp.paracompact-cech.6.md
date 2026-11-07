# Čech 消解 + 软层无环 $\implies$ 仿紧上 Čech 等于层上同调（路线，含缺口）
`imp.paracompact-cech` · 推出 · strong 边 · 根 `../`

`def.cech-cohomology` Čech 上同调 + `prop.paracompact-partition-unity` 仿紧性与单位分解 + `thm.cartan-leray` Cartan–Leray 谱序列 + `cor.cech-cohomology-spectral` Čech 到上同调的谱序列 + `def.right-derived-functor` 右导出函子 + `thm.derived-long-exact` 导出函子的长正合列 → `thm.paracompact-cech-equals-sheaf` 仿紧空间上的 Čech 就是上同调

直接得到无环性。正确的替代是：细层 $\implies$ 软层（$\mathcal C(X)$-模层用单位分解乘截面；一般阿贝尔层用 endomorphism 分割 $\eta_j$，见节点 ② 的 (a)/(b)），再用 Godement 的「软层无环」作维数转移 —— 后者是缺口，见第四步。

> 续见 proofs/imp.paracompact-cech.7.md
