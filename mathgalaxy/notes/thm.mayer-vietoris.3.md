# Mayer–Vietoris 序列　`thm.mayer-vietoris`　·　说明
根 `../`

$$\Omega := \begin{cases} \mathrm{d}(\rho_{V}\omega) & \text{在}\ U\ \text{上（}\rho_{V}\omega\ \text{在}\ U\setminus W\ \text{外延拓为}\ 0\text{）}\\ -\mathrm{d}(\rho_{U}\omega) & \text{在}\ V\ \text{上（}\rho_{U}\omega\ \text{外延拓为}\ 0\text{）}\end{cases}$$

 在 $W$ 上两式相等：$\mathrm{d}(\rho_{V}\omega) + \mathrm{d}(\rho_{U}\omega) = \mathrm{d}((\rho_{U}+\rho_{V})\omega) = \mathrm{d}\omega = 0$。故 $\Omega$ 是 $M$ 上整体光滑的 $(k+1)$-形式，且 $\mathrm{d}\Omega = 0$。定义 $\delta[\omega] := [\Omega]$。良定义：$\omega$ 换成 $\omega + \mathrm{d}\eta$ 时 $\Omega$ 只差一个 $\mathrm{d}$-恰当项；换单位分解时 $\rho_{V} - \rho_{V}^{\prime}$ 的支撑落在 $W$ 里，$\Omega$ 的差同样是 $\mathrm{d}$-恰当项。所以 $\delta$ 只依赖 $[\omega]$。

> 续见 notes/thm.mayer-vietoris.4.md
