# 单位分解把逐卡换元拼成流形上的换元公式
`dep.spivak-partition-changevars` · 推出 · strong 边 · 根 `../`

`prop.paracompact-partition-unity` 仿紧性与单位分解 → `thm.change-of-variables-manifold` 流形上的换元公式

设 $M$ 由保向图册 $\{(U_\alpha,\varphi_\alpha)\}$ 覆盖，取从属于 $\{U_\alpha\}$ 的光滑单位分解 $\{\rho_\alpha\}$（`prop.paracompact-partition-unity`）。对 $n$-形式 $\omega$ 令 $\int_M\omega:=\sum_\alpha\int_{U_\alpha}\rho_\alpha\omega$，每一项经 $\varphi_\alpha$ 拉回 $\mathbb{R}^{n}$ 后按 $\mathbb{R}^{n}$ 的换元公式计算。① 局部有限性保证每点只有有限多个 $\rho_\alpha$ 非零，右侧实质是有限和。② 与图册无关：换一组卡后两项在同一张卡上逐项比较，相等由 $\mathbb{R}^{n}$ 上换元公式的 $|\det|$ 因子给出，保向时该因子为正。③ 换定向使每张卡上 $\de

> 续见 proofs/dep.spivak-partition-changevars.2.md
