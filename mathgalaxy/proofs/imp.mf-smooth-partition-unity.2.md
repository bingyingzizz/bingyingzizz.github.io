# 鼓包函数 $+$ 局部有限加细 $\implies$ 光滑单位分解
`imp.mf-smooth-partition-unity` · 推出 · strong 边 · 根 `../`

`prop.paracompact-partition-unity` 仿紧性与单位分解 + `def.partition-of-unity` 单位分解 → `thm.smooth-partition-unity` 光滑单位分解

**第三步：在每块上造正鼓包。** 固定 $\alpha$。$\overline{V_{\alpha}}$ 紧且含于开集 $W_{\alpha}$，取其有限覆盖 $B(x_{j}, s_{j})$，并取 $s_{j}>0$ 使 $B(x_{j}, 2s_{j}) \subseteq W_{\alpha}$；令 $r_{j}=2s_{j}$，则 $B(x_{j}, r_{j}/2)$ 仍覆盖 $\overline{V_{\alpha}}$ 且 $B(x_{j}, r_{j}) \subseteq W_{\alpha}$。在每个球上取鼓包 $\beta_{j} \ge 0$：在 $B(x_{j}, r_{j}/2)$ 内为正、在 $B(x_{j}, r_{j})$ 外为零。令

$$\psi_{\alpha} := \sum_{j}\beta_{j} .$$

> 续见 proofs/imp.mf-smooth-partition-unity.3.md
