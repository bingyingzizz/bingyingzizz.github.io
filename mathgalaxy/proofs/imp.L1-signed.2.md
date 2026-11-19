# imp.L1-signed
`imp.L1-signed` · 推出 · strong 边 · 根 `../`

`def.rn-derivative` Radon–Nikodym 导数与 Lebesgue 分解 + `def.integrable` 可积 / L¹ + `thm.lebesgue-radon-nikodym` Lebesgue–Radon–Nikodym 定理 → `prop.L1-signed` L¹(ν) 与全变差

由全变差的定义，$|\nu|(E) = \int_{E} |g|\,\mathrm{d}|\nu|$；而 $|\nu|(E) = \int_{E} 1\,\mathrm{d}|\nu|$。两者对一切 $E$ 相等，故 $|g| = 1$ 于 $|\nu|$-a.e. ✓（用 Radon–Nikodym 的唯一性，不引用 (b)）。
**(b)** 定义 $L^{1}(\nu) := L^{1}(|\nu|)$（右边是普通 $L^{1}$ 空间）。对 $f \in L^{1}(\nu)$，$\int f\,\mathrm{d}\nu = \int f g\,\mathrm{d}|\nu|$，于是
$$\Bigl|\int f\,\mathrm{d}\nu\Bigr| = \Bigl|\int fg\,\mathrm{d}|\nu|\Bigr| \le \int|fg|\,\mathrm{d}|\nu| = \int|f|\,\mathrm{d}|\nu|$$
（中间用积分的绝对值不等式，最后一步用 $|g| = 1$）✓。
**(c)** 取公共基准 $\rho := |\nu_{1}| + |\nu_{2}|$，写 $d\nu_{k} = f_{k}\,\mathrm{d}\rh

> 续见 proofs/imp.L1-signed.3.md
