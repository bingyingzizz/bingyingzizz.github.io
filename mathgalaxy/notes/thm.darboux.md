# Darboux 定理　`thm.darboux`　·　说明
根 `../`

**证明**（Moser 技巧）。目标：在 $p$ 附近把 $\omega$ 拉成常系数形式 $\omega_{0} = \sum_{i=1}^{n} dq_{i} \wedge dp_{i}$。分五步，每一步都在一个足够小的图卡里做。

**第一步：辛基存在（线性代数）**。设 $(V, \omega)$ 是 $2n$ 维辛空间。取 $e_{1} \ne 0$，由非退化性存在 $f_{1}$ 使 $\omega(e_{1}, f_{1}) \ne 0$，伸缩 $f_{1}$ 使 $\omega(e_{1}, f_{1}) = 1$（交错性给 $\omega(e_{1}, e_{1}) = 0$）。令 $W = \{v : \omega(e_{1}, v) = \omega(f_{1}, v) = 0\}$。对任意 $v$，$v - \omega(v, f_{1})e_{1} + \omega(v, e_{1})f_{1} \in W$，故 $V = \operatorname{span}(e_{1}, f_{1}) \oplus W$；又 $\omega|_{W}$ 非退化，对 $\dim W$ 归纳即得辛基 $e_{1}, \ldots, e_{n}, f_{1}, \ldots, f_{n}$（`def.symplectic-basis`）。∎

> 续见 notes/thm.darboux.2.md
