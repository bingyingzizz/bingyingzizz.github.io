# L¹(ν) 与全变差　`prop.L1-signed`　·　说明
根 `../`

再把上面那条 $(b)$ 用在 $\mu := |\nu|$ 上：$d|\nu| = |g|\,\mathrm{d}|\nu|$，而有限测度对自己的导数恒为 $1$，故 $|g| = 1$ 于 $|\nu|$-a.e. ✓。
**(b)** 定义 $L^{1}(\nu) := L^{1}(|\nu|)$（右边是普通 $L^{1}$ 空间）。对 $f \in L^{1}(\nu)$，$\int f\,\mathrm{d}\nu = \int f g\,\mathrm{d}|\nu|$，于是
$$\Bigl|\int f\,\mathrm{d}\nu\Bigr| = \Bigl|\int fg\,\mathrm{d}|\nu|\Bigr| \le \int|fg|\,\mathrm{d}|\nu| = \int|f|\,\mathrm{d}|\nu|$$
（中间用积分的绝对值不等式，最后一步用 $|g| = 1$）✓。
**(c)** 取公共基准 $\rho := |\nu_{1}| + |\nu_{2}|$，写 $d\nu_{k} = f_{k}\,\mathrm{d}\rho$（$|f_{k}| = \frac{d|\nu_{k}|}{d\rho}$）。由 (a)：
$$|\nu_{1}+\nu_{2}|(E) = \int_{E}|f_{1}+f_{2}|\,\mathrm{d}\rho \le \int_{E}|f_{1}|\,\mathrm{d}\rho + \int_{E}|f_{2}|\,\mathrm{d}\rho = |\nu_{1}|(E) + |\nu_{2}|(E) \;✓$$
即全变差满足**三角不等式**，于是 $\nu \mapsto |\nu|(X)$ 是测度空间上的**范数** ✓。∎

> 续见 notes/prop.L1-signed.3.md
