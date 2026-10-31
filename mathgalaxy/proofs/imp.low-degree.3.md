# 标准复形的低次项 $\implies$ 低次正合列
`imp.low-degree` · 推出 · strong 边 · 根 `../`

`def.bar-resolution` 标准消解 + `def.invariant-functor` 不变量函子 → `prop.low-degree-exact` 低次正合列

**第二行。** $0 \to A \to B \to C \to 0$ 是 $G$-模的短正合列，取右导出函子（$R^{0} = (-)^{G}$、$R^{n} = H^{n}$）得长正合列

$$0 \to A^{G} \to B^{G} \to C^{G} \xrightarrow{\ \partial\ } H^{1}(G, A) \to H^{1}(G, B) \to H^{1}(G, C) \to H^{2}(G, A) \to \cdots ,$$

截取前六项就是题述那一行。存在性用标准事实：$(-)^{G}$ 左正合、其右导出函子给长正合列（由导出范畴里「短正合列给出导出三角」+ 共调函子得到）。∎

> 续见 proofs/imp.low-degree.4.md
