import { useMemo } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

import { useLivraria } from "../contexts/LivrariaContext";

export default function CabecalhoLoja({
    nome,
    quantidadeFavoritos,
    onAtualizar,
    onAbrirFavoritos,
    onCadastrarLivro,
    onAbrirUsuarios,
    onAbrirConta,
}) {
    const { alternarTema, cores, modoEscuro } = useLivraria();
    const styles = useMemo(() => criarEstilos(cores), [cores]);

    return (
        <View style={styles.container}>
            <View style={styles.topo}>
                <View>
                    <Text style={styles.saudacao}>Olá, {nome}</Text>
                    <Text style={styles.marca}>Livraria</Text>
                </View>

                <View style={styles.acoes}>
                    <Pressable
                        accessibilityLabel="Atualizar livros"
                        onPress={onAtualizar}
                        style={({ pressed }) => [
                            styles.acao,
                            pressed && styles.acaoPressionada,
                        ]}
                    >
                        <Text style={styles.iconeAcao}>↻</Text>
                    </Pressable>
                    <Pressable
                        accessibilityLabel={
                            modoEscuro ? "Ativar modo claro" : "Ativar modo escuro"
                        }
                        onPress={alternarTema}
                        style={({ pressed }) => [
                            styles.acao,
                            pressed && styles.acaoPressionada,
                        ]}
                    >
                        <Text style={styles.iconeTema}>{modoEscuro ? "☀" : "☾"}</Text>
                    </Pressable>
                    <Pressable
                        accessibilityLabel="Abrir livros favoritos"
                        onPress={onAbrirFavoritos}
                        style={({ pressed }) => [
                            styles.acao,
                            pressed && styles.acaoPressionada,
                        ]}
                    >
                        <Text style={styles.iconeFavorito}>♥</Text>
                        {quantidadeFavoritos > 0 && (
                            <View style={styles.contador}>
                                <Text style={styles.textoContador}>
                                    {quantidadeFavoritos > 9
                                        ? "9+"
                                        : quantidadeFavoritos}
                                </Text>
                            </View>
                        )}
                    </Pressable>
                </View>
            </View>

            <View style={styles.chamada}>
                <Text style={styles.selo}>CATÁLOGO DIGITAL</Text>
                <Text style={styles.titulo}>Histórias para todos os momentos.</Text>
                <Text style={styles.subtitulo}>
                    Explore clássicos, aventuras e novas ideias em um só lugar.
                </Text>
            </View>

            <Pressable
                accessibilityLabel="Cadastrar um novo livro"
                onPress={onCadastrarLivro}
                style={({ pressed }) => [
                    styles.botaoCadastro,
                    pressed && styles.acaoPressionada,
                ]}
            >
                <Text style={styles.iconeCadastro}>＋</Text>
                <Text style={styles.textoCadastro}>Cadastrar livro</Text>
            </Pressable>

            <View style={styles.atalhos}>
                <Pressable
                    onPress={onAbrirUsuarios}
                    style={({ pressed }) => [
                        styles.atalho,
                        pressed && styles.acaoPressionada,
                    ]}
                >
                    <Text style={styles.iconeAtalho}>♙</Text>
                    <Text style={styles.textoAtalho}>Usuários</Text>
                </Pressable>
                <Pressable
                    onPress={onAbrirConta}
                    style={({ pressed }) => [
                        styles.atalho,
                        pressed && styles.acaoPressionada,
                    ]}
                >
                    <Text style={styles.iconeAtalho}>◎</Text>
                    <Text style={styles.textoAtalho}>Minha conta</Text>
                </Pressable>
            </View>
        </View>
    );
}

const criarEstilos = (cores) =>
    StyleSheet.create({
        container: {
            backgroundColor: cores.primariaEscura,
            borderBottomLeftRadius: 54,
            borderBottomRightRadius: 14,
            marginHorizontal: -20,
            paddingBottom: 36,
            paddingHorizontal: 20,
            paddingTop: 12,
        },
        topo: {
            alignItems: "center",
            flexDirection: "row",
            justifyContent: "space-between",
        },
        saudacao: {
            color: "#E6D7CF",
            fontSize: 11,
            marginBottom: 1,
        },
        marca: {
            color: cores.branco,
            fontSize: 25,
            fontWeight: "900",
            letterSpacing: -0.5,
        },
        acoes: {
            flexDirection: "row",
        },
        acao: {
            alignItems: "center",
            backgroundColor: "rgba(255,255,255,0.12)",
            borderColor: "rgba(255,255,255,0.16)",
            borderRadius: 10,
            borderWidth: 1,
            height: 38,
            justifyContent: "center",
            marginLeft: 7,
            width: 38,
        },
        acaoPressionada: {
            backgroundColor: "rgba(255,255,255,0.22)",
            transform: [{ scale: 0.94 }],
        },
        iconeAcao: {
            color: cores.branco,
            fontSize: 24,
            lineHeight: 27,
        },
        iconeTema: {
            color: cores.branco,
            fontSize: 20,
        },
        iconeFavorito: {
            color: "#FF9B91",
            fontSize: 19,
        },
        contador: {
            alignItems: "center",
            backgroundColor: cores.destaque,
            borderRadius: 8,
            height: 16,
            justifyContent: "center",
            minWidth: 16,
            paddingHorizontal: 3,
            position: "absolute",
            right: -3,
            top: -4,
        },
        textoContador: {
            color: "#2B1710",
            fontSize: 9,
            fontWeight: "900",
        },
        chamada: {
            marginTop: 30,
            maxWidth: 330,
        },
        selo: {
            color: cores.destaque,
            fontSize: 10,
            fontWeight: "900",
            letterSpacing: 1.5,
            marginBottom: 10,
        },
        titulo: {
            color: cores.branco,
            fontSize: 28,
            fontWeight: "900",
            letterSpacing: -0.7,
            lineHeight: 33,
        },
        subtitulo: {
            color: "#DCCBC2",
            fontSize: 13,
            lineHeight: 19,
            marginTop: 9,
        },
        botaoCadastro: {
            alignItems: "center",
            alignSelf: "flex-start",
            backgroundColor: cores.destaque,
            borderRadius: 8,
            flexDirection: "row",
            marginTop: 20,
            paddingHorizontal: 15,
            paddingVertical: 11,
            transform: [{ rotate: "-2deg" }],
        },
        iconeCadastro: {
            color: "#2B1710",
            fontSize: 19,
            fontWeight: "900",
            marginRight: 6,
        },
        textoCadastro: {
            color: "#2B1710",
            fontSize: 12,
            fontWeight: "900",
        },
        atalhos: {
            flexDirection: "row",
            marginTop: 10,
        },
        atalho: {
            alignItems: "center",
            backgroundColor: "rgba(255,255,255,0.1)",
            borderColor: "rgba(255,255,255,0.16)",
            borderRadius: 18,
            borderWidth: 1,
            flexDirection: "row",
            marginRight: 8,
            paddingHorizontal: 12,
            paddingVertical: 9,
        },
        iconeAtalho: {
            color: cores.branco,
            fontSize: 15,
            marginRight: 6,
        },
        textoAtalho: {
            color: cores.branco,
            fontSize: 11,
            fontWeight: "800",
        },
    });
