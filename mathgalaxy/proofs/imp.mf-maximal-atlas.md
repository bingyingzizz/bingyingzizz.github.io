# 相容性传递 $\implies$ 极大图册存在且唯一
`imp.mf-maximal-atlas` · 推出 · strong 边 · 根 `../`

`def.manifold-chart` 图卡 → `prop.maximal-atlas` 极大图册

把「与 $\mathcal{A}$ 中每张卡都 $C^{\infty}$-相容的卡」全部收进来，得到 $\mathcal{A}^{+}$。逐条验证。

**(1) 相容（传递性）。** 取 $(V,\psi), (W,\theta) \in \mathcal{A}^{+}$，要证 $\theta \circ \psi^{-1}$ 光滑。在 $V \cap W$ 上任取 $p$，由 $\mathcal{A}$ 覆盖 $M$ 取含 $p$ 的一张卡 $(U,\varphi) \in \mathcal{A}$。在 $\varphi(U \cap V \cap W)$ 上

$$\theta \circ \psi^{-1} = (\theta \circ \varphi^{-1}) \circ (\varphi \circ \psi^{-1}),$$

右边两个因子都是 $\mathbb{R}^{n}$ 开集之间的 $C^{\infty}$ 映射（这正是「与 $\varphi$ 相容」的意思），故复合光滑。$p$ 任意，得该转移映射处处光滑 —— 这就是相容性的传递性。

> 续见 proofs/imp.mf-maximal-atlas.2.md
