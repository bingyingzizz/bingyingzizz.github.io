# 谱定理 $\Longrightarrow$ Courant–Fischer（Rayleigh 商 + 维数计数）
`imp.spectral-courant-fischer` · 推出 · strong 边 · 根 `../`

`thm.spectral-theorem` 谱定理（实对称） → `thm.courant-fischer` Courant–Fischer 极小极大原理

**③ 下界与取等**。取 $S_{0} = \operatorname{span}(u_{1}, \ldots, u_{k})$：其上 $c_{k+1} = \cdots = c_{n} = 0$，故 $R_{A} \ge \lambda_{k}$，且 $x = u_{k}$ 取到等号。两边合起来得 $\max_{\dim S = k} \min_{S} R_{A} = \lambda_{k}$；把 $S$ 与维数 $n - k + 1$ 的 $T$ 对调（同样靠维数计数）、取 $T_{0} = \operatorname{span}(u_{k}, \ldots, u_{n})$ 验证取等，即得第二等式。∎
