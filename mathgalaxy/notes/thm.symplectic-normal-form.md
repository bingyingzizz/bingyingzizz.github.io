# 辛标准形定理　`thm.symplectic-normal-form`　·　说明
根 `../`

**证明**：对 $\dim V$ 归纳。$\dim V = 0$ 时取空基即可。设 $\dim V > 0$，先取 $0 \ne e_{1} \in V$。

**第一步：造一条双曲平面。** 若对一切 $u$ 都有 $\omega(e_{1}, u) = 0$，则 $e_{1}$ 落在 $\omega$ 的根（radical）里，与「非退化」矛盾；所以存在 $u \in V$ 使 $\omega(e_{1}, u) \ne 0$。令 $f_{1} := u / \omega(e_{1}, u)$，则 $\omega(e_{1}, f_{1}) = 1$，且 $\omega(f_{1}, e_{1}) = -1$。

**第二步：$V = W \oplus W^{\perp}$，其中 $W := \operatorname{span}(e_{1}, f_{1})$。** 先看 $W \cap W^{\perp}$：若 $v = a e_{1} + b f_{1}$ 且 $\omega(v, e_{1}) = \omega(v, f_{1}) = 0$，则 $\omega(v, e_{1}) = -b$、$\omega(v, f_{1}) = a$，故 $a = b = 0$。再证 $V = W + W^{\perp}$：对 $v \in V$ 令

$$p(v) := \omega(v, f_{1})\, e_{1} - \omega(v, e_{1})\, f_{1},$$

> 续见 notes/thm.symplectic-normal-form.2.md
