# 层化的泛性质把「是不是覆盖」翻译成层论条件
`def-dep.sieveequiv-sheafification` · 推出 · strong 边 · 根 `../`

`thm.sheafification` 层化 → `prop.sieve-covering-equivalent` 覆盖筛的四条等价

把 $R\hookrightarrow h_{X}$ 与 $h_{X}\to\underline{X}=\widetilde{h_{X}}$ 合成后，要延拓出 $u:\widetilde{R}\to\underline{X}$ ——「存在且唯一」用的正是层化函子 $\widetilde{(-)}$ 作为「层范畴含入」的左伴随的泛性质，即 `thm.sheafification`。

反方向的 $v:\underline{X}\to\widetilde{R}$ 同样由该泛性质（层的粘合公理下的唯一延拓）给出。

两条复合与恒等号的比较也全依赖延拓的唯一性；换成别的层化构造，这一步的「唯一」就不成立。∎

> 记号 $\widetilde{(-)}$ 是**层化**；证明靠的是它的泛性质。
