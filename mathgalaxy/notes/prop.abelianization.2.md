# 交换化　`prop.abelianization`　·　说明
根 `../`

**证明。** 要造自然双射
$$\operatorname{Hom}_{\mathbf{Grp}}(G,\ A) \;\cong\; \operatorname{Hom}_{\mathbf{Ab}}\bigl(G^{\mathrm{ab}},\ A\bigr),\qquad A\ \text{阿贝尔}.$$
- **良定义**：任给群同态 $\varphi : G\to A$（$A$ 阿贝尔）。换位子 $ghg^{-1}h^{-1}$ 被送到 $\varphi(g)\varphi(h)\varphi(g)^{-1}\varphi(h)^{-1} = e$（交换性！），故 $[G,G] \subseteq \ker\varphi$，于是 $\varphi$ 唯一地穿过商 $G\twoheadrightarrow G^{\mathrm{ab}}$ ✓。
- **反向**是 $G\to G^{\mathrm{ab}}$ 与函数的复合 ✓，且两个方向互逆（在 $G^{\mathrm{ab}}$ 上验一次、在 $\operatorname{Hom}(G,A)$ 上验一次）✓。
- **自然性**对 $G$ 与 $A$ 都逐项验证（$G\to G'$ 的像把 $[G,G]$ 送进 $[G',G']$，故诱导 $G^{\mathrm{ab}}\to G'^{\mathrm{ab}}$）✓。∎
⭐ 这正是「交换化是左伴随」的含义：它是「把非交换性清零」的**最经济**的函子 —— 任何到阿贝尔群的映射都只能看到 $G^{\mathrm{ab}}$。
