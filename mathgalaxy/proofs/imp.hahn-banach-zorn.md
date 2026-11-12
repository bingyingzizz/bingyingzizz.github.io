# Zorn 引理：把延拓推到整个空间
`imp.hahn-banach-zorn` · 推出 · strong 边 · 根 `../`

`lem.zorn` Zorn 引理 → `thm.hahn-banach` Hahn–Banach 定理

考虑所有「$g$ 定义在子空间 $N\supseteq M$ 上、线性、$g|_{M}=f$、$g\le p$ 于 $N$」的 $g$，按延拓关系排序。任一全序子族的并仍是同类对象（定义域取并，线性与 $g\le p$ 逐点验证），故由 `lem.zorn` 取得极大元 $F$。若 $\operatorname{dom}F\ne X$，取 $x_{0}\notin\operatorname{dom}F$，用一维延拓引理把 $F$ 再延一步，与极大性矛盾；故 $F$ 定义在整个 $X$ 上且 $F\le p$。∎
