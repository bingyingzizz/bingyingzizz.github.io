# imp.triangle-morphism
`imp.triangle-morphism` · 推出 · strong 边 · 根 `../`

`def.distinguished-triangle` 导出三角 + `def.homotopy` 同伦 + `thm.five-lemma` 五引理 + `lem.yoneda` 米田引理 → `lem.triangle-morphism` 三角态射的性质

把同一套正合列用在**旋转后**的三角 $L \xrightarrow{g} M \xrightarrow{h} K[1] \xrightarrow{-f[1]} L[1]$ 上（对着靶 $K[1]$），$(h w_{1}) \circ h = 0$ 给出 $h w_{1}$ 落在 $\operatorname{im}(-f[1])^{*}$ 里：存在 $\beta : L[1] \to K[1]$ 使 **$h w_{1} = -\beta \circ f[1]$**；

- 于是 $w^{2} = w_{1} h w_{1} h = w_{1}(h w_{1}) h = -w_{1} \beta f[1] h$。而 $f[1] \circ h = 0$ —— 那正是旋转公理说的「三角里相邻两步复合为零」。故 $w^{2} = 0$。∎
