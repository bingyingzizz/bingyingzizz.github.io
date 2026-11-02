# 外测度　`def.outer-measure`　·　说明
根 `../`

外测度定义在**全体**子集上（$\mathcal{P}(X)$，不是某个 $\sigma$代数），代价是它只有**次**可加性。

所以外测度不是测度 —— 它太大了，连 $\mathcal{P}(X)$ 上都没有可加性。Carathéodory 的想法是在其中挑出一批「表现良好」的集合（下一条定义），外测度在它们上面才变成真正的测度。

Lebesgue 最初构造的就是外测度：$\mu^{*}(A) = \inf\{ \sum (b_{n} - a_{n}) : A \subseteq \bigcup (a_{n}, b_{n}) \}$。
