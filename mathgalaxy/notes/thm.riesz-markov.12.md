# Riesz–Markov 表示　`thm.riesz-markov`　·　说明
根 `../`

故 $\Lambda(f) \le M(\Lambda(\varphi) - \int \varphi) + \int f$。由 $\Lambda(\varphi) \le \mu(W) < \mu(K) + \varepsilon$ 与 $\varphi = 1$ 于 $K$（故 $\int \varphi \ge \mu(K)$）得 $\Lambda(\varphi) - \int \varphi < \varepsilon$，从而 $\Lambda(f) \le \int f + M\varepsilon$。令 $\varepsilon \to 0$ 得 $\Lambda(f) \le \int f$。∎

对一般 $f \in C_{c}(X)$，写 $f = f^{+} - f^{-}$ 并用线性性与上述两半，即得 $\Lambda(f) = \int f\,\mathrm{d}\mu$。∎

**唯一性**：若两个 Radon 测度给出同一个 $\Lambda$，对开 $U$、$f \prec U$ 有 $\int f\,\mathrm{d}\mu_1 = \Lambda(f) = \int f\,\mathrm{d}\mu_2$；对紧 $K \subseteq U$，取 $f \prec U$、$f = 1$ 于 $K$（单点紧化 + `lem.urysohn`），得 $\mu_1(K) \le \Lambda(f) \le \mu_2(U)$。先对 $K$ 取上确界（开集内正则）、再对 $U$ 取下确界（外正则），得 $\mu_1(U) = \mu_2(U)$，从而两测度在 Borel 集上相等。

> 续见 notes/thm.riesz-markov.13.md
