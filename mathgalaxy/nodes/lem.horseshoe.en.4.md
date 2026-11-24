# Horseshoe Lemma　`lem.horseshoe`
English entry · root `../`
[in graph](../#n=lem.horseshoe)　·　[Chinese page (authoritative)](./lem.horseshoe.md)

$$d_{n} = \begin{pmatrix} d_{n}^{P} & \chi_{n} \\ 0 & e_{n} \end{pmatrix} : P_{n}\oplus Q_{n} \longrightarrow P_{n-1}\oplus Q_{n-1}, \qquad \chi_{n} : Q_{n} \to P_{n-1}.$$

Block multiplication gives the upper-right block of $d_{n-1}d_{n}$ as follows: it $= d_{n-1}^{P}\chi_{n} + \chi_{n-1}e_{n}$. The other three blocks vanish.

Thus $d^{2} = 0$ if and only if $d_{n-1}^{P}\chi_{n} = -\chi_{n-1}e_{n}$.

We can choose $\chi_{n}$ **inductively**. Given $\chi_{n-1}$, we have

$$d_{n-2}^{P}\bigl(-\chi_{n-1}e_{n}\bigr) = -\bigl(d_{n-2}^{P}\chi_{n-1}\bigr)e_{n} = \chi_{n-2}e_{n-1}e_{n} = 0,$$

> continued in nodes/lem.horseshoe.en.5.md
