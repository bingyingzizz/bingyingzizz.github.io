# 辛标准形定理　`thm.symplectic-normal-form`　·　说明
根 `../`

则 $\omega(p(v), e_{1}) = \omega(v, e_{1})$、$\omega(p(v), f_{1}) = \omega(v, f_{1})$，于是 $v - p(v)$ 与 $e_{1}, f_{1}$ 都正交，落在 $W^{\perp}$ 里。故 $V = W \oplus W^{\perp}$。

**第三步：$W^{\perp}$ 上 $\omega$ 仍非退化。** 若 $v \in W^{\perp}$ 且 $\omega(v, W^{\perp}) = 0$，则连同 $\omega(v, W) = 0$ 得 $\omega(v, V) = 0$，故 $v = 0$。

**第四步：归纳。** 由第二步 $\dim W^{\perp} = \dim V - 2$，由第三步 $(W^{\perp}, \omega|_{W^{\perp}})$ 仍是辛空间。对它用归纳假设得辛基 $e_{2}, \ldots, e_{n}, f_{2}, \ldots, f_{n}$；补上 $e_{1}, f_{1}$ 就是 $V$ 的辛基。于是 $\dim V = 2n$ 为偶数，且 $\omega$ 在这组基下的矩阵是 $J_{0}$。∎

> 续见 notes/thm.symplectic-normal-form.3.md
