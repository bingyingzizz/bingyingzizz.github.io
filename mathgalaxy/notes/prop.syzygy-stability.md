# 合冲的稳定性　`prop.syzygy-stability`　·　说明
根 `../`

**证明（对 $n$ 归纳，每次用合冲比较引理）。**
$n = 0$：$M \cong M$，取 $F = F_{1} = 0$ ✓。
$n = 1$：两条预覆盖 $0 \to \Omega M \to P_{0} \to M \to 0$ 与 $0 \to \Omega_{1}M \to Q_{0} \to M \to 0$ 都用投射项，直接引比较引理得 $P_{0}\oplus\Omega_{1}M \cong Q_{0}\oplus\Omega M$ ✓。
归纳步：设 $\Omega^{n}M \oplus F \cong \Omega_{1}^{n}M \oplus F_{1}$。两条消解在 $n+1$ 次处给出两条预覆盖，中间项 $P_{n}$、$Q_{n}$ 都投射，但它们的「目标」分别是 $\Omega^{n}M$ 与 $\Omega_{1}^{n}M$ —— 不同的模，比较引理不能直接用。补救的办法：把直和项并进去。取
$$P_{n} \oplus Q_{n} \twoheadrightarrow \Omega^{n}M \oplus F, \qquad P_{n} \oplus Q_{n} \twoheadrightarrow \Omega_{1}^{n}M \oplus F_{1},$$
（第二块用归纳假设中的同构把目标搬过去），两条预覆盖的中间项都是 $P_{n}\oplus Q_{n}$、都投射 ✓，再用一次比较引理，得
$$\Omega^{n+1}M \oplus \bigl(P_{n}\oplus Q_{n}\bigr) \;\cong\; \Omega_{1}^{n+1}M \oplus \bigl(P_{n}\oplus Q_{n}\bigr),$$
而这正是要的

> 续见 notes/prop.syzygy-stability.2.md
