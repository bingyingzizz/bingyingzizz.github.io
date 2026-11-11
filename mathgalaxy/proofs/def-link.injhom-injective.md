# 内射判据给出链复形的可缩性
`def-link.injhom-injective` · 推出 · strong 边 · 根 `../`

`prop.injective-criterion` 内射对象的判据 + `def.projective-object` 投射 / 内射对象 → `prop.injective-complex-homotopy` 内射复形：零调、拟同构与同伦

要证零调的内射复形可缩，须逐层造收缩同伦 $s^{n} : I^{n} \to I^{n-1}$。
每一层的短正合列 $0 \to Z^{n} \to I^{n} \to Z^{n+1} \to 0$ 由 $I^{n}$ 的内射性（`def.projective-object`）沿 $Z^{n} \to I^{n-1}$ 分裂 —— 正是 `prop.injective-criterion` 给出的「分裂短正合列」判据。
分裂给出的截面就是 $s^{n}$ 的候选，逐层拼接即得 $ds + sd = \mathrm{id}$，复形可缩。∎

> 证明的关键是内射对象的「分裂短正合列」判据（`prop.injective-criterion`）。
