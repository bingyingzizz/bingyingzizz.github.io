# imp.symplectic-normal-form
`imp.symplectic-normal-form` · 推出 · strong 边 · 根 `../`

`def.symplectic-basis` 辛基 + `def.alternating-form` 交错型 + `def.hyperbolic-plane` 双曲平面 + `def.orthogonal-complement` 正交补 → `thm.symplectic-normal-form` 辛标准形定理

**第二步：$V = W \oplus W^{\perp}$，其中 $W := \operatorname{span}(e_{1}, f_{1})$。** 先看 $W \cap W^{\perp}$：若 $v = a e_{1} + b f_{1}$ 且 $\omega(v, e_{1}) = \omega(v, f_{1}) = 0$，则 $\omega(v, e_{1}) = -b$、$\omega(v, f_{1}) = a$，故 $a = b = 0$。再证 $V = W + W^{\perp}$：对 $v \in V$ 令

$$p(v) := \omega(v, f_{1})\, e_{1} - \omega(v, e_{1})\, f_{1},$$

则 $\omega(p(v), e_{1}) = \omega(v, e_{1})$、$\omega(p(v), f_{1}) = \omega(v, f_{1})$，于是 $v - p(v)$ 与 $e_{1}, f_{1}$ 都正交，落在 $W^{\perp}$ 里。故 $V = W \oplus W^{\perp}$。

> 续见 proofs/imp.symplectic-normal-form.3.md
