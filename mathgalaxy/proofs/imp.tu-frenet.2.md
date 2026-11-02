# 单位正交 $\implies$ Frenet–Serret 公式
`imp.tu-frenet` · 推出 · strong 边 · 根 `../`

`def.frenet-frame` 曲率与挠率 + `def.arc-length` 弧长 → `thm.frenet-serret` Frenet–Serret 公式

**(3) $N' = -\kappa T+\tau B$。** $\langle N,N\rangle = 1$ 给 $N'\perp N$，所以 $N'$ 落在 $\{T,B\}$ 张成的平面里，只需两个系数：

$$\langle N',T\rangle = -\langle N,T'\rangle = -\kappa\langle N,N\rangle = -\kappa ,\qquad \langle N',B\rangle = -\langle N,B'\rangle = \tau\langle N,N\rangle = \tau .$$

于是 $N' = -\kappa T+\tau B$。∎

⭐ 三条的证明只用了「标架单位正交」这一件事 —— 与曲面情形 $e_{i}$ 的反称性证明（`imp.dg-antisym`）是同一段计算。
