# 局部内积做凸组合 $\implies$ 每个向量丛都有纤维度量
`imp.mf-bundle-metric` · 推出 · strong 边 · 根 `../`

`def.vector-bundle` 向量丛 + `thm.smooth-partition-unity` 光滑单位分解 → `prop.bundle-metric` 纤维度量

**局部内积。** 取 $E$ 的局部平凡化 $\Phi_{\alpha} : \pi^{-1}(U_{\alpha}) \to U_{\alpha} \times \mathbb{R}^{k}$，$\alpha \in A$。对 $p \in U_{\alpha}$、$s, t \in E_{p}$ 令

$$\langle s,t\rangle_{\alpha} := \bigl\langle \operatorname{pr}_{2}\Phi_{\alpha}(s),\ \operatorname{pr}_{2}\Phi_{\alpha}(t)\bigr\rangle_{\mathbb{R}^{k}} .$$

这是 $U_{\alpha}$ 上的纤维内积，且对 $p$ 光滑（$\Phi_{\alpha}$ 是微分同胚）。

**加细成局部有限。** 把 $\{U_{\alpha}\}$ 换成局部有限的开加细（流形仿紧），必要时重编号，仍记 $\{U_{\alpha}\}_{\alpha \in A}$；取从属于它的光滑单位分解 $\{\rho_{\alpha}\}$（`thm.smooth-partition-unity`），在 $A$ 外延拓 $\rho_{\alpha} \equiv 0$。

**凸组合。** 令

> 续见 proofs/imp.mf-bundle-metric.2.md
