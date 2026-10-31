# 合冲比较引理（逐层使用）$\implies$ 合冲在相差投射直和项下唯一
`imp-link.schanuel-syzstab` · 推出 · strong 边 · 根 `../`

`lem.schanuel` 合冲比较引理 → `prop.syzygy-stability` 合冲的稳定性

$n = 1$ 直接是合冲比较引理：两条预覆盖的中间项 $P_{0}, Q_{0}$ 都投射，故 $P_{0}\oplus\Omega_{1}M \cong Q_{0}\oplus\Omega M$ ✓。
归纳步：设 $\Omega^{n}M \oplus F \cong \Omega_{1}^{n}M \oplus F_{1}$（$F, F_{1}$ 投射）。把直和项并进去，得两条**目标相同、中间项相同**的预覆盖
$$P_{n}\oplus Q_{n} \twoheadrightarrow \Omega^{n}M\oplus F, \qquad P_{n}\oplus Q_{n} \twoheadrightarrow \Omega_{1}^{n}M\oplus F_{1},$$
再用一次比较引理即得 $\Omega^{n+1}M \oplus (P_{n}\oplus Q_{n}) \cong \Omega_{1}^{n+1}M \oplus (P_{n}\oplus Q_{n})$ ✓，而 $P_{n}\oplus Q_{n}$ 投射 ✓。
于是「$\Omega^{n}M$ 投射」与「$\Omega_{1}^{n}M$ 投射」等价：一边投射时 $\Omega^{n}M\oplus F$ 投射，故另一边的 $\Omega_{1}^{n}M$ 是投射模的直和项、仍投射 ✓。∎
