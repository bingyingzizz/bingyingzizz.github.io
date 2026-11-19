# imp.yoneda
`imp.yoneda` · 推出 · strong 边 · 根 `../`

`def.functor` 函子 + `def.natural-transformation` 自然变换 + `def.representable` 表示函子 → `lem.yoneda` 米田引理

**证明。** 定义映射
$$\Phi : \operatorname{Nat}(h^{X}, F) \longrightarrow F(X), \qquad \Phi(\alpha) := \alpha_{X}(1_{X}).$$
- **逆映射**：给 $u \in F(X)$，对每个 $Y$ 定义
$$\Psi(u)_{Y} : \operatorname{Hom}_{\mathcal{C}}(X, Y) \to F(Y), \qquad \Psi(u)_{Y}(f) := F(f)(u).$$
它是自然的：对 $g : Y \to Z$，由 $F$ 的函子性 $F(g)\circ F(f) = F(g\circ f)$，两边正是 $F(g)\bigl(\Psi(u)_{Y}(f)\bigr)$ 与 $\Psi(u)_{Z}(g\circ f)$ ✓。
- **$\Phi\Psi = \mathrm{id}$**：$\Psi(u)_{X}(1_{X}) = F(1_{X})(u) = u$ ✓。
- **$\Psi\Phi = \mathrm{id}$**：给 $\alpha$ 与 $f : X\to Y$，用 $\alpha$ 的自然性（作用在 $f$ 上）
$$\alpha_{Y}\circ h^{X}(f) = F(f)\circ \alpha_{X} \;\implies\; \alpha_{Y

> 续见 proofs/imp.yoneda.2.md
