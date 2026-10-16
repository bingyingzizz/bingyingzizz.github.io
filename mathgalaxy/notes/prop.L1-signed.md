# L¹(ν) 与全变差　`prop.L1-signed`　·　说明
根 `../`

**证明。**
**(a)** 因为 $|\nu|(E) = 0 \implies \nu(E) = 0$（由 (a) 式 $|\nu(E)| \le |\nu|(E)$），所以 $\nu \ll |\nu|$，由 Radon–Nikodym 取 $g := \frac{d\nu}{d|\nu|}$ ✓。再把上面那条 $(b)$ 用在 $\mu := |\nu|$ 上：$d|\nu| = |g|\,\mathrm{d}|\nu|$，而有限测度对自己的导数恒为 $1$，故 $|g| = 1$ 于 $|\nu|$-a.e. ✓。
**(b)** 定义 $L^{1}(\nu) := L^{1}(|\nu|)$（右边是普通 $L^{1}$ 空间）。对 $f \in L^{1}(\nu)$，$\int f\,\mathrm{d}\nu = \int f g\,\mathrm{d}|\nu|$，于是
$$\Bigl|\int f\,\mathrm{d}\nu\Bigr| = \Bigl|\int fg\,\mathrm{d}|\nu|\Bigr| \le \int|fg|\,\mathrm{d}|\nu| = \int|f|\,\mathrm{d}|\nu|$$
（中间用积分的绝对值不等式，最后一步用 $|g| = 1$）✓。
**(c)** 取公共基准 $\rho := |\nu_{1}| + |\nu_{2}|$，写 $d\nu_{k} = f_{k}\,\mathrm{d}\rho$（$|f_{k}| = \frac{d|\nu_{k}|}{d\rho}$）。由 (a)：
$$|\nu_{1}+\nu_{2}|(E) = \int_{E}|f_{1}+f_{2}|\,\mathrm{d}\rho \le \int_{E}|f_{1}|\,\

> 续见 notes/prop.L1-signed.2.md
