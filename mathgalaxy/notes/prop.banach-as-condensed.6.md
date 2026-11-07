# Banach 空间都是凝聚态阿贝尔群　`prop.banach-as-condensed`　·　说明
根 `../`

**第四步：两个构造互逆。** 给定有界 $T$，$\underline{T}_{\mathrm{pt}}(x)=T(x)$，故 $T\mapsto\underline{T}\mapsto T$ 是恒等。给定 $\varphi$，第三步给有界 $T=\varphi_{\mathrm{pt}}$；对任意 $S$、$f\in C(S,E)$、$s\in S$，用常值映射 $s:\mathrm{pt}\to S$ 的自然性得 $\varphi_S(f)(s)=\varphi_{\mathrm{pt}}\bigl(f(s)\bigr)=T\bigl(f(s)\bigr)=\underline{T}_S(f)(s),$ 故 $\varphi=\underline{T}$。于是 $T\mapsto\underline{T}$ 是双射 $\operatorname{Hom}_{\mathrm{bdd}}(E,F)\xrightarrow{\ \sim\ }\operatorname{Hom}_{\mathrm{CondAb}}(\underline{E},\underline{F})$。∎

**备注**：证明真正用到 Banach 完备性的只有「$C(S,E)$ 是 Banach 空间」这一句（层条件本身对任意 Hausdorff 拓扑向量空间 $E$ 都成立：粘接出的 $f$ 只要连续即可）；第三步用的是 $E,F$ 的范数。逐点群结构使层条件与群运算自动相容，这正是「凝聚态阿贝尔群 = CHaus 上阿贝尔群层」这一定义要检查的全部内容。

> 续见 notes/prop.banach-as-condensed.7.md
