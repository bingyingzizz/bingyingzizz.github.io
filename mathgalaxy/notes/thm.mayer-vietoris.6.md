# Mayer–Vietoris 序列　`thm.mayer-vietoris`　·　说明
根 `../`

**第五步：$H^{k}(W)$ 处正合**。$\operatorname{im} s^{*} \subseteq \ker\delta$：若 $(\omega_{U}, \omega_{V})$ 闭、$\omega = \omega_{U}|_{W} - \omega_{V}|_{W}$，则第三步的 $\Omega$ 满足 $\Omega = \mathrm{d}(\rho_{V}\omega_{U} - \rho_{V}\omega_{V})$ 的相应拼接，直接由构造可验 $\delta[\omega] = 0$。$\ker\delta \subseteq \operatorname{im} s^{*}$：设 $\delta[\omega] = 0$，即第三步的 $\Omega = \mathrm{d}\Psi$ 对某个整体 $\Psi \in \Omega^{k}(M)$ 成立。令 

$$\alpha := \rho_{V}\omega - \Psi|_{U},\qquad \beta := -\rho_{U}\omega - \Psi|_{V}.$$

 则 $\mathrm{d}\alpha = \mathrm{d}(\rho_{V}\omega) - \Omega|_{U} = 0$、$\mathrm{d}\beta = -\mathrm{d}(\rho_{U}\omega) - \Omega|_{V} = 0$，且 $\alpha|_{W} - \beta|_{W} = \rho_{V}\omega + \rho_{U}\omega = \omega$。故 $[\omega] = s^{*}([\alpha], [\beta])$。

> 续见 notes/thm.mayer-vietoris.7.md
