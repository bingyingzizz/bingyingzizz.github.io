# 根式可解 与 伽罗瓦群可解　`thm.radical-solvable`　·　说明
根 `../`

**回到 $K$**：$K^{\prime}/F$ 伽罗瓦（两个正规扩张的合成），限制映射 $\operatorname{Gal}(M/F^{\prime})\to\operatorname{Gal}(K^{\prime}/F^{\prime})$ 满射，故 $\operatorname{Gal}(K^{\prime}/F^{\prime})$ 可解。又有正合列 $1\to\operatorname{Gal}(K^{\prime}/F^{\prime})\to\operatorname{Gal}(K^{\prime}/F)\to\operatorname{Gal}(F^{\prime}/F)\to1$（分圆扩张伽罗瓦，限制满射），两端可解、$\operatorname{Gal}(F^{\prime}/F)$ 交换，故 $\operatorname{Gal}(K^{\prime}/F)$ 可解。最后 $\operatorname{Gal}(K/F)$ 是 $\operatorname{Gal}(K^{\prime}/F)$ 的商：$K^{\prime}/F$ 正规，$K$ 的每个 $F$-自同构都可延拓到 $K^{\prime}$。可解群的商可解，故 $\operatorname{Gal}(K/F)$ 可解。∎

⭐ **为什么必须 char 0**：两个方向都用了「$x^{m}-1$ 无重根」（从而 $\sigma$ 可对角化）与可分性。char $p$ 时纯开方扩张要换成 Artin–Schreier 扩张 $x^{p}-x-a$，结论要改写。

> 续见 notes/thm.radical-solvable.9.md
