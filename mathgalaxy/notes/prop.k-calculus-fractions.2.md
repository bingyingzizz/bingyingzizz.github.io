# K(A) 允许分式演算　`prop.k-calculus-fractions`　·　说明
根 `../`

**为什么 $t$ 是拟同构。** 关键在「把 $w$ 放在 $\theta$ 的第二个分量」：于是 $\theta_{*}$ 的第二分量是 $w_{*}$，可逆，所以 $\theta_{*}$ 是**满**的，三角的长正合列就把 $M(\theta)$ 的同调压进 $\ker \theta_{*}$ 里：
- $\theta_{*}$ 满，故连接同态为零，$H^{n}(M(\theta)) \cong \ker \theta_{*}^{n}$；
- $\ker \theta_{*}^{n} = \{(k, \ell) : f_{*}k = w_{*}\ell\} \xrightarrow{\;\sim\;} H^{n}(K^{\bullet})$（给定 $k$，$\ell = w_{*}^{-1}f_{*}k$ 唯一）；
- 这条同构下 $H^{n}(N^{\bullet}) = H^{n-1}(M(\theta)) \xrightarrow{\;t_{*}\;} H^{n}(L'^{\bullet})$ 就是 $w_{*}^{-1}f_{*}$，是**同构**。

> 续见 notes/prop.k-calculus-fractions.3.md
