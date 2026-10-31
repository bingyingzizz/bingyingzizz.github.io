# imp.pcp-urysohn-from-ns
`imp.pcp-urysohn-from-ns` · 推出 · strong 边 · 根 `../`

`thm.nagata-smirnov` 局部有限基度量化定理 + `def.second-countable` 第二可数空间 → `thm.urysohn-metrization` 乌雷松度量化定理

设 $X$ 正则且第二可数，取可数基 $\mathcal{B} = \{ B_{n} \}$。把 $\mathcal{B}$ 写成可数多个「单项族」之并：$\mathcal{B} = \bigcup_{n} \{\, B_{n} \,\}$。
每个单项族 $\{\, B_{n} \,\}$ 是**离散**族（任何点的任何邻域至多碰到它的唯一成员 —— 因为只有一个成员），当然也局部有限。故 $\mathcal{B}$ 是 $\sigma$-局部有限的基，由 Nagata–Smirnov 定理 $X$ 可度量化 ✓。∎
⭐ 这说明本包的两条度量化定理**不是并列的**：Urysohn 定理是 Nagata–Smirnov 定理的特例。反过来说，Urysohn 定理的更初等证明（嵌入 Hilbert 立方体）仍有独立价值 —— 它顺便给出了「正则 $+$ 第二可数 $\implies$ 可分」这条度量结构。
