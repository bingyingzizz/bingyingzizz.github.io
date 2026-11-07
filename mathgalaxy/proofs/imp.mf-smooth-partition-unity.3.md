# 鼓包函数 $+$ 局部有限加细 $\implies$ 光滑单位分解
`imp.mf-smooth-partition-unity` · 推出 · strong 边 · 根 `../`

`prop.paracompact-partition-unity` 仿紧性与单位分解 + `def.partition-of-unity` 单位分解 → `thm.smooth-partition-unity` 光滑单位分解

则 $\psi_{\alpha} \in C^{\infty}(M)$、$\psi_{\alpha} \ge 0$、$\psi_{\alpha} > 0$ 在 $V_{\alpha}$ 上，且 $\operatorname{supp}\psi_{\alpha} \subseteq \bigcup_{j}\overline{B(x_{j}, r_{j})} \subseteq W_{\alpha} \subseteq U_{\alpha}$。

**第四步：归一化。** 由 $\{V_{\alpha}\}$ 覆盖 $M$，每点至少落在一个 $V_{\alpha}$ 里，故 $\Psi := \sum_{\alpha}\psi_{\alpha} > 0$ 处处成立。支撑族局部有限，故 $\Psi$ 光滑。令

$$\rho_{\alpha} := \frac{\psi_{\alpha}}{\Psi}.$$

> 续见 proofs/imp.mf-smooth-partition-unity.4.md
