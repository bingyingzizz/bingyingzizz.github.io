# Riesz–Markov 表示　`thm.riesz-markov`　·　说明
根 `../`

**第三步：Carathéodory 延拓**。由引理 4，每个开集都是 $\mu^{*}$-可测的；由 `thm.caratheodory`，$\mu^{*}$-可测集构成 $\sigma$-代数且 $\mu^{*}$ 在其上可加。开集生成 Borel $\sigma$-代数，故每个 Borel 集可测；把 $\mu^{*}$ 限制到 Borel 集上得 Borel 测度 $\mu$。对开 $U$ 有 $\mu(U) = \mu^{*}(U)$（$U$ 自身就是覆盖，单调性给等号）；由构造 $\mu$ 在 Borel 集上外正则，而（甲）与 $\nu(K) \le \mu(K)$ 给出开集上内正则。

**紧集上有限**：对紧 $K$，取紧邻域 $L \supseteq K$（局部紧 Hausdorff 中每点有紧邻域，有限覆盖即得），令 $W = \operatorname{int} L$。由单点紧化 + `lem.urysohn` 取 $\varphi \in C_{c}(X)$，$0 \le \varphi \le 1$、$\varphi = 1$ 于 $L$。任何 $f \prec W$ 满足 $f \le \varphi$，故 $\mu(W) \le \Lambda(\varphi) < \infty$；于是 $\mu(K) \le \mu(W) < \infty$。

> 续见 notes/thm.riesz-markov.9.md
