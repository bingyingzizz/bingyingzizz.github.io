# Mayer–Vietoris 序列　`thm.mayer-vietoris`　·　说明
根 `../`

**第四步：$H^{k}(M)$ 处正合**。$r^{*}$ 单已由第一步。$\ker s^{*} \subseteq \operatorname{im} r^{*}$：设 $\omega_{U} \in \Omega^{k}(U)$、$\omega_{V} \in \Omega^{k}(V)$ 闭，且 $\omega_{U}|_{W} - \omega_{V}|_{W} = \mathrm{d}\gamma$。令 

$$\omega := \rho_{U}\omega_{U} + \rho_{V}\omega_{V} + \mathrm{d}\rho_{U} \wedge \gamma,$$

 其中 $\gamma$ 在 $W$ 外按 $0$ 延拓（$\mathrm{d}\rho_{U}$ 在 $U \setminus V$ 上为零，故乘积光滑）。则 

$$\mathrm{d}\omega = \mathrm{d}\rho_{U}\wedge(\omega_{U}-\omega_{V}) + \mathrm{d}(\mathrm{d}\rho_{U}\wedge\gamma) = \mathrm{d}\rho_{U}\wedge\mathrm{d}\gamma - \mathrm{d}\rho_{U}\wedge\mathrm{d}\gamma = 0,$$

> 续见 notes/thm.mayer-vietoris.5.md
