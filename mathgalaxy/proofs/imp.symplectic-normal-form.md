# imp.symplectic-normal-form
`imp.symplectic-normal-form` · 推出 · strong 边 · 根 `../`

`def.symplectic-basis` 辛基 + `def.alternating-form` 交错型 + `def.hyperbolic-plane` 双曲平面 + `def.orthogonal-complement` 正交补 → `thm.symplectic-normal-form` 辛标准形定理

**证明**：对 $\dim V$ 归纳。$\dim V = 0$ 时取空基即可。设 $\dim V > 0$，先取 $0 \ne e_{1} \in V$。

**第一步：造一条双曲平面。** 若对一切 $u$ 都有 $\omega(e_{1}, u) = 0$，则 $e_{1}$ 落在 $\omega$ 的根（radical）里，与「非退化」矛盾；所以存在 $u \in V$ 使 $\omega(e_{1}, u) \ne 0$。令 $f_{1} := u / \omega(e_{1}, u)$，则 $\omega(e_{1}, f_{1}) = 1$，且 $\omega(f_{1}, e_{1}) = -1$。

> 续见 proofs/imp.symplectic-normal-form.2.md
