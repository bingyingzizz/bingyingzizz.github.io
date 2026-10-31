# 鼓包函数 $+$ 局部有限加细 $\implies$ 光滑单位分解
`imp.mf-smooth-partition-unity` · 推出 · strong 边 · 根 `../`

`prop.paracompact-partition-unity` 仿紧性与单位分解 + `def.partition-of-unity` 单位分解 → `thm.smooth-partition-unity` 光滑单位分解

$$\psi_{\alpha} \in C^{\infty}(M),\qquad \psi_{\alpha} = 1\ \text{on}\ V_{\alpha},\qquad \operatorname{supp}\psi_{\alpha} \subseteq U_{\alpha} .$$

**第四步：归一化。** 由 $\{V_{\alpha}\}$ 覆盖 $M$，每点至少有一个 $\psi_{\alpha} = 1$，故 $\Psi := \sum_{\alpha}\psi_{\alpha} > 0$ 处处成立。和为局部有限（支撑族局部有限），故 $\Psi$ 光滑。令

$$\rho_{\alpha} := \frac{\psi_{\alpha}}{\Psi}.$$

则 $\rho_{\alpha} \in C^{\infty}(M)$、$0 \le \rho_{\alpha} \le 1$、$\operatorname{supp}\rho_{\alpha} \subseteq U_{\alpha}$、且 $\sum_{\alpha}\rho_{\alpha} = 1$ 处处成立 —— 三条要求全齐。∎

> 续见 proofs/imp.mf-smooth-partition-unity.4.md
